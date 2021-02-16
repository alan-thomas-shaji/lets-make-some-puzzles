<script>
    export let name;
    export let githubUrl;
    export let imgLink;
</script>

<div class="p-4 text-center">
    <a href="{githubUrl}" style="color: #f6f4f4" class="text-2xl no-underline">
        <img src={imgLink} alt={name} class="h-24 w-24 inline rounded-full border border-gray-100 shadow-sm"/><br/>
        {name}
    </a>
</div>
