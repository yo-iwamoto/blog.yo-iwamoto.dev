import { getAllArticles } from "@/repo/articles";

export default async function Page() {
  const data = await getAllArticles();
  console.log(data);

  return <div>Page</div>;
}
