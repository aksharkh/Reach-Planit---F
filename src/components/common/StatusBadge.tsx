import React from "react";

type Status = "pending" | "upcoming" | "completed";

type Size = "sm" | "md";

interface StatusTagProps {
  status: Status;
  size?: Size;
}

const statusConfig = {
  pending: {
    label: "Pending",
    classes:
      "bg-yellow-50 text-yellow-700 border-yellow-200",
    dot: "bg-yellow-500",
  },
  upcoming: {
    label: "Upcoming",
    classes:
      "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
  completed: {
    label: "Completed",
    classes:
      "bg-green-50 text-green-700 border-green-200",
    dot: "bg-green-500",
  },
};

const sizeClasses = {
  sm: "text-xs px-2.5 py-1",
  md: "text-sm px-3 py-1.5",
};

const StatusTag: React.FC<StatusTagProps> = ({
  status,
  size = "md",
}) => {
  const config = statusConfig[status];

  return (
    <span
      className={` mb-3 inline-flex items-center gap-2 rounded-full border font-medium
      ${config.classes}
      ${sizeClasses[size]}`}
    >
      {/* status dot */}
      <span
        className={`h-2 w-2 rounded-full ${config.dot}`}
      />
      {config.label}
    </span>
  );
};

export default StatusTag;
