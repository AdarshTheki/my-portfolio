import { createClient } from "@sanity/client";

const client = createClient({
  // projectId: "cquxoryx",
  projectId: "0mp8me9l",
  dataset: 'production'
});
export default client;
