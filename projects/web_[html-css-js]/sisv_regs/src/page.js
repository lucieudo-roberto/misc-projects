
const page_fc = {
    $q : (nm) =>{ return document.querySelectorAll(nm)},
    
    tab_change : function(tabID,callback) {
        let tabs = this.$q(".tab-bnt");
        let scrs = this.$q(".windows");
        
        tabs.forEach((tab)=>{
            tab.style.backgroundColor="#147ca0"
            tab.style.color="#fff"
        })
        
        scrs.forEach((wind)=>{wind.style.display="none"})
        scrs[tabID].style.display = "block";
        tabs[tabID].style.backgroundColor = "#F1F2F6";
        tabs[tabID].style.color= "#708090";
        
        try {callback()} catch{return;}
    },
    
    get_data_form : function() {
        let in_txt = this.$q(".inp-txt");
        let in_chk = this.$q(".inp-chk");
        let output = []
        let acdate = new Date().toLocaleDateString();
        output.push(acdate)
        
        in_txt.forEach((x)=> { output.push(x.value) });
        in_chk.forEach((x)=> {
            let aux = (x.checked == true ) ? "X" : " ";
            output.push(aux);
        });
        return output.join('|');
    },
    
    set_data_form : function(row_id) {
        let in_txt = this.$q(".inp-txt");
        let in_chk = this.$q(".inp-chk");
        let data = data_fc.select(row_id).split('|');

        for (let a=0,x=1; x<10; a++,x++){in_txt[a].value = data[x]};
        
        for (let a=0,x=10; x<22; a++,x++) {
            in_chk[a].checked = (data[x] == "X" ) ? true : false;
        }
    },

    clea_form : function() {
        let in_txt = this.$q(".inp-txt");
        let in_chk = this.$q(".inp-chk");
        
        in_txt.forEach((d)=> d.value = "");
        in_chk.forEach((d)=> d.checked = false);
        in_txt[5].value = 1;
        in_chk[0].checked = false;
    },

    list_form1 : function (){
        let out_window = this.$q(".w2-data-list")[0];
        data_fc.open();
        let data = data_fc._data;
        let outstr = "";
        
        for ( let x = data.length; x > 0; x-- ) {
            let tmp = data[x-1].split("|");          
            let age = this.dateCalc(tmp[0],this.dateConvert(tmp[3]))
             outstr += `<li class='w2-data-list-item'><i>${tmp[0]}</i><i>${tmp[1].substr(0,7)}..</i><i>${tmp[2].substr(0,12)}..</i><i>${age}</i></li>`;
        }

        out_window.innerHTML = outstr;
    },





    dateCalc : function(date1, date2) {
        let dateA = date1.split('/')
        let dateO = date2.split('/')

        let n_year = (dateA[2] - dateO[2] ) // calculate year
        let n_mont = (dateA[1] >= dateO[1]) ? (dateA[1] - dateO[1]) : parseInt(12-dateO[1])+parseInt(dateA[1]);

        return `${n_year}A, ${n_mont}M`;
    },






    dateConvert : function(date) {          
        if (date.length > 4 ) {
            let date_ = date.split('-');
            return `${date_[2]}/${date_[1]}/${date_[0]}`;
        }
        return '';
    },
    
    show_popup : function(text) {
        let popup_win = this.$q(".popup")[0];
        popup_win.innerHTML = ""
        popup_win.innerHTML = `<p class="popup-text">${text}</p>`;
        popup_win.style.top = "5%";
        popup_win.style.transition = "0.5s"
        navigator.vibrate(1000)
        setTimeout(()=>{
            popup_win.style.top = "-100px";
        },2000)
    }
}
