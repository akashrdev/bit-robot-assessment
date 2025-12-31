import { LEADERBOARD_DUMMY_DATA } from "@/app/const/leaderboard-dummy-data";
import { abbreviate } from "@/app/utils/abbreviate";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import Image from "next/image";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export type LeaderboardRow = {
  rank: number;
  user: {
    address: string;
    avatarUrl: string;
  };
  lifetimeEarning: number;
  thisEpoch: number;
  referrals: number;
};
const columnHelper = createColumnHelper<LeaderboardRow>();
const columns = [
  columnHelper.accessor("rank", {
    header: () => "Rank",
    cell: (info) => {
      const isConnectedUser = info.row.index === 0;
      return (
        <span className={isConnectedUser ? "text-primary-brand" : undefined}>
          {info.getValue()}
        </span>
      );
    }
  }),

  columnHelper.accessor((row) => row.user.address, {
    id: "user",
    header: () => "User",
    cell: (info) => {
      const row = info.row.original;
      const isConnectedUser = info.row.index === 0;

      return (
        <div className="flex items-center gap-3">
          <Image
            src={row.user.avatarUrl}
            alt="avatar"
            width={20}
            height={20}
            className="rounded-full"
          />
          <span
            className={
              isConnectedUser ? "text-primary-brand" : "text-gray2-text"
            }
          >
            {abbreviate(info.getValue())}
          </span>
        </div>
      );
    }
  }),

  columnHelper.accessor("lifetimeEarning", {
    header: () => "Lifetime Earning",
    cell: (info) => {
      const isConnectedUser = info.row.index === 0;
      return (
        <span
          className={isConnectedUser ? "text-primary-brand" : "text-gray2-text"}
        >
          {info.getValue().toLocaleString()}
        </span>
      );
    }
  }),

  columnHelper.accessor("thisEpoch", {
    header: () => "This Epoch",
    cell: (info) => {
      const isConnectedUser = info.row.index === 0;
      return (
        <span
          className={isConnectedUser ? "text-primary-brand" : "text-gray2-text"}
        >
          {info.getValue().toLocaleString()}
        </span>
      );
    }
  }),

  columnHelper.accessor("referrals", {
    header: () => "Referrals",
    cell: (info) => {
      const isConnectedUser = info.row.index === 0;
      return (
        <span
          className={isConnectedUser ? "text-primary-brand" : "text-gray2-text"}
        >
          {info.getValue()}
        </span>
      );
    }
  })
];

export function LeaderboardTable() {
  const { publicKey } = useWallet();
  const dataWithCurrentUserFirst = useMemo(() => {
    const connectedUser = publicKey?.toBase58();
    if (!connectedUser) return LEADERBOARD_DUMMY_DATA;

    return [
      {
        rank: 230,
        user: {
          address: connectedUser,
          avatarUrl: "/avatars/default-user.png"
        },
        lifetimeEarning: 20_023,
        thisEpoch: 3_150,
        referrals: 5
      },
      ...LEADERBOARD_DUMMY_DATA
    ];
  }, [publicKey]);

  const table = useReactTable({
    data: dataWithCurrentUserFirst,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="overflow-hidden">
      <table className="w-full border-separate border-spacing-0">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 pb-3 text-left font-medium text-gray1-text font-aeonik border-b-2 border-b-primary-accent tracking-[-0.04em]"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={twMerge(
                "border-b border-b-primary-accent hover:bg-primary-accent/40 font-aeonik",
                row.index === 0 && "bg-primary-accent"
              )}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={twMerge(
                    "px-4 py-3 font-aeonik text-sm text-gray2-text tracking-[-0.04em]",
                    cell.column.id === "rank" &&
                      "font-neuebit text-xl leading-5 tracking-normal"
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
