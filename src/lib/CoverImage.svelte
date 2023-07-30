<script>
	let imgList = ["https://images.unsplash.com/photo-1603101947606-df77d33c000e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
	"https://images.unsplash.com/photo-1603118258032-aea76c546616?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1459&q=80","https://images.unsplash.com/photo-1606484589718-070f61cbd72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2968&q=80","https://images.unsplash.com/photo-1463595663992-cb0dc1d6403f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2980&q=80","https://images.unsplash.com/photo-1584805392123-21cb6ca2c853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80","https://images.unsplash.com/photo-1562859771-995cb5a2ce12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80","https://images.unsplash.com/photo-1632218505642-5f93c883ee26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80","https://images.unsplash.com/photo-1558844109-f45f2d162527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1917&q=80","https://images.unsplash.com/photo-1518138927375-388cfa3afb0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
	]
	const currentTime = new Date()
	const milliseconds = currentTime.getTime();
	const rand = Math.floor((milliseconds / 5000) % 9)
</script>

<img src={imgList[rand]} alt="cover"/>

<style type="text/css">
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
</style>