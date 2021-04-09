export const getAddress = {
  data() {
    return {
    }
  },
  methods: {
      getAddress: function() {
        let address = sortParks[i].location_1.human_address;
        let txt = address.replace(/"/g,""); //global replace
        let txt2 = txt.replace("{address: ","");
        let txt3 = txt2.split(",");
        console.log(txt3[0]);
        return txt3[0];
      }
  }
}
