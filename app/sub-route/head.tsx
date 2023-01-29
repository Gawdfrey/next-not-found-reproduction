import { notFound } from "next/navigation";
export default function Head() {
  notFound();
  return (
    <>
      <title>Sub Route Head</title>
    </>
  );
}
