const API_KEY = 'AIzaSyBki-d6BFxZwRjZizx5WfXvi6lqmBj6qUk';
const CHANNEL_ID = 'UCzKYnW_hhaXiYMhZ8clLxow';

async function fetchYouTubeFollowers() {
  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`);
    const data = await response.json();
    const followers = data.items[0].statistics.subscriberCount;
    document.getElementById('youtube-followers').textContent = followers.toLocaleString();
  } catch (error) {
    console.error('Error fetching YouTube followers:', error);
    document.getElementById('youtube-followers').textContent = 'Error';
  }
}

fetchYouTubeFollowers();
