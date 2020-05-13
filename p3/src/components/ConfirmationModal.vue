<script type="text/x-template" id="modal-template">
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <h2>Are you sure you want to delete?</h2>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-danger" v-on:click="confirmation">Delete</button>
                        <button class="btn btn-primary" v-on:click="$emit('close')">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</script>
Vue.component('confirmation-box', {
    template: '#modal-template',
    methods: {
        confirmation: function()
        {
            this.$parent.confirmationDelete();
        }
    }
});
