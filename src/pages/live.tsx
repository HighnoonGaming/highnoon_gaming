function Live() {
  return (
    <div className="p-10 flex items-center justify-center">
      <iframe
        src="https://player.twitch.tv/?channel=highnoongamingbb&parent=localhost"
        allowFullScreen
        // width="1920"
        className="w-full h-145 min-h-120"
      ></iframe>
    </div>
  )
}

export default Live
