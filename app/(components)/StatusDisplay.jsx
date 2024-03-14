const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "open":
        color = "bg-green-300";
        return color;
      case "in progress":
        color = "bg-yellow-300";
        return color;
      case "waiting push":
        color = "bg-green-100";
        return color;
      case "closed":
        color = "bg-gray-300";
        return color;
    }
    return color;
  };

  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>
      {status}
    </span>
  );
};

export default StatusDisplay;
