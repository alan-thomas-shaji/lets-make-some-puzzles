<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
<style>
	.box {
        width: 500px;
        height: 215px;
		/*border: 1px solid #f6f4f4;*/
		border-radius: 2px;
		padding: 10px;
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