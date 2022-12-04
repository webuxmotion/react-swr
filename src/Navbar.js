import usePost from './usePost';

function Navbar () {
    const { post, isLoading } = usePost(1);

    if (isLoading) return <div>Loading...</div>

    return <div>
      <h2>{post.id}</h2>
    </div>
  }

  export default Navbar;