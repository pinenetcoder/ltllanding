import Link from "next/link";
import IndexLayout from "@/Layouts/IndexLayout";

export default function About() {
  return (
    <IndexLayout>
      <main>This is about page <Link href="/">Back</Link> </main>
    </IndexLayout>
  )
}