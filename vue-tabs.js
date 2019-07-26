Vue.component('tabs', {
    template: `
        <div>
            <div class="ttu tracked bb bw1 b--black-10 flex">
              <ul>
                <li v-for="tab in tabs" class="dib link pa3 black" :class="{ 'dib link pa3 blue bb bw2': tab.isActive }">
                    <a :href="tab.href" class="dib link pa3 black" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
              </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    
    data() {
        return {tabs: [] };
    },
    
    created() {
        
        this.tabs = this.$children;
        
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,
    
    props: {
        name: { required: true },
        selected: { default: false}
    },
    
    data() {
        return {
            isActive: false
        };
    },
    
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    
    mounted() {
        this.isActive = this.selected;
        
    }
});
