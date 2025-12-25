import PostList from "./components/PostList";

function App() {
	return (
		<div className="min-h-screen bg-[#0d1b2a] text-[#a9bcd0]">
			<div className="max-w-4xl mx-auto px-6 py-10">
				<header className="mb-8 border-b border-[#00bcd4]/30 pb-4">
					<h1 className="text-3xl font-bold text-[#f0f4f8]">BlogPost</h1>
					<p className="text-sm text-[#7f8c8d]">Modern, mysterious, polished.</p>
				</header>

				<PostList />
			</div>
		</div>
	);
}

export default App;
