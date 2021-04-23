import { format } from "date-fns";

const formatTimestamp = (value) =>
  format(new Date(value), "dd. MM. yyyy HH:mm");

export default formatTimestamp;
