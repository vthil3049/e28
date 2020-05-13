<template>
    <div>
        <h2>Add a new Item</h2>

        <label for='title'>Title</label>
        <input type='text' v-model='item.title' id='title' />

        <label for='type'>Item type</label>
        <input type='text' v-model='item.type' id='type' />

        <label for='duration'>Performance time(in minutes):</label>
        <input type='text' v-model='item.duration' id='duration' />

        <label for='performers'>Performers(Enter comma separated names)</label>
        <input type='text' v-model='item.performers' id='performers' />

        <label for='description'>Description</label>
        <textarea v-model='item.description' id='description'></textarea>

        <input type='submit' value='Add' />
    </div>
</template>
<!-- "title": "Grand Opening",
"type": "band",
"description": "National anthem followed by Victory March",
"performers": ["Honors Jazz Band"] -->
<script>
export default {
    name: '',
    data: function() {
        return {
            added: false,
            item: {
                title: '',
                type: '',
                duration: '',
                performers: [],
                description: '',
            }
        };
    }
};
</script>

<style scoped>
input {
    font-size: 15pt;
}

textarea,
input[type='text'] {
    width: 50%;
}

textarea {
    height: 75px;
    display: block;
    margin: auto;
}

label {
    margin-top: 20px;
    display: block;
    font-weight: bold;
}

input[type='submit'] {
    display: inline-block;
    margin-top: 10px;
}
</style>
