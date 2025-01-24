import React from 'react';

const FacebookClone = () => {
  const stories = [
    { id: 1, user: 'Your Story', image: 'story1.jpg' },
    { id: 2, user: 'John Doe', image: 'story2.jpg' },
    { id: 3, user: 'Jane Smith', image: 'story3.jpg' },
    { id: 4, user: 'Mike Johnson', image: 'story4.jpg' },
    { id: 5, user: 'Alice Brown', image: 'story5.jpg' },
  ];

  const posts = [
    {
      id: 1,
      user: 'Winter',
      userImage: 'avatar.jpg',
      content: 'Having a great day!',
      image: 'post1.jpg',
      likes: 156,
      comments: 24,
      shares: 5,
      timeAgo: '2 hours ago',
    },
    {
      id: 2,
      user: 'Jane Smith',
      userImage: 'avatar.jpg',
      content: 'Beautiful sunset today!',
      image: 'post2.jpg',
      likes: 243,
      comments: 45,
      shares: 12,
      timeAgo: '4 hours ago',
    },
  ];

  return (
    <div style={{ backgroundColor: '#f0f2f5', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Create Post Section */}
      <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="avatar.jpg" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
          <input
            type="text"
            placeholder="What's on your mind?"
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '20px',
              backgroundColor: '#f0f2f5',
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#45bd62', fontWeight: 'bold' }}>Photo</button>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#f35369', fontWeight: 'bold' }}>Live</button>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#a033ff', fontWeight: 'bold' }}>Room</button>
        </div>
      </div>

      {/* Story Section */}
      <div style={{ display: 'flex', overflowX: 'auto', marginBottom: '15px' }}>
        {stories.map((story) => (
          <div key={story.id} style={{ marginRight: '10px', position: 'relative', width: '100px', height: '170px', borderRadius: '10px', overflow: 'hidden' }}>
            <img src={story.image} alt={story.user} style={{ width: '100%', height: '100%' }} />
            <span
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '12px',
              }}
            >
              {story.user}
            </span>
          </div>
        ))}
      </div>

      {/* Posts Section */}
      {posts.map((post) => (
        <div key={post.id} style={{ backgroundColor: 'white', borderRadius: '10px', marginBottom: '15px', padding: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={post.userImage} alt={post.user} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
            <div>
              <h4 style={{ margin: '0', fontSize: '16px' }}>{post.user}</h4>
              <small style={{ color: '#65676b' }}>{post.timeAgo}</small>
            </div>
          </div>
          <p>{post.content}</p>
          <img src={post.image} alt={post.content} style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#65676b' }}>
            <span>{post.likes} Likes</span>
            <span>{post.comments} Comments • {post.shares} Shares</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
            <button style={{ backgroundColor: 'transparent', border: 'none', color: '#65676b', fontWeight: 'bold' }}>Like</button>
            <button style={{ backgroundColor: 'transparent', border: 'none', color: '#65676b', fontWeight: 'bold' }}>Comment</button>
            <button style={{ backgroundColor: 'transparent', border: 'none', color: '#65676b', fontWeight: 'bold' }}>Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacebookClone;
