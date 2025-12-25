export default function PostItem({ post }) {
  return (
    <article className="bg-[#14253d] rounded-xl p-6 shadow-md shadow-[#00bcd4]/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00bcd4]/20 animate-[fadeInUp_0.4s_ease-out]">
      <h3 className="text-xl font-bold text-[#f0f4f8]">{post.title}</h3>
      <p className="mt-2 leading-relaxed">{post.content}</p>
      <div className="mt-4 text-sm italic text-[#7f8c8d]">By {post.author || "Anonymous"}</div>
    </article>
  );
}
