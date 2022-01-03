export default function getColorFromPriority(priority: number) {
  switch (priority) {
    case 1:
      return "red";
    case 2:
      return "orange";
    case 3:
      return "indigo";
    default:
      return "neutral";
  }
}
