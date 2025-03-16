import './App.css';
import avatar from './assets/profile-thumbnail.png'

const App = () => {
  return (
    <div className="container">
      <article className='testimonial-container'>
        <div className='user-details'>
          <div className='user-avatar'>
            <img src={avatar} alt={'avatar'} />
          </div>
          <div className='user-identity'>
            <p className='user-name'>Sarah Dole</p>
            <p className='user-handle'>@sarahdole</p>
          </div>
        </div>
        <p className='user-review'>
          I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!
        </p>
      </article>
    </div>
  )
}

export default App