<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
<style>
	.box {
        width: 500px;
        height: 205px;
		border: 1px solid rgb(255, 245, 245);
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
        margin: 0 0 1em 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        font-size: 85%;
    
	}
    
</style>

<div class="box">
	<slot></slot>
</div>