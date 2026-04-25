export default async function Page({ params }) {
  const { slug } = await params;   // ✅ unwrap promise

  const languages = ['javascript', 'python', 'java', 'c++'];

  if (!languages.includes(slug)) {
    return <div>Post Not Found</div>;
  }

  return <div>My Post: {slug}</div>;
}
