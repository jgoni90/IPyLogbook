// toggle display of all code cells
"using strict";

var toggle_codecells_extension = (function() {

     var show=true;
     
     function toggle(){
         if (show){
             $('div.input').hide();
             IPython.notebook.metadata.hide_input = true;
         }else{
             $('div.input').show();
             IPython.notebook.metadata.hide_input = false;
         }
         show = !show;
     }
 
    /**
    * Add run control buttons to toolbar and initialize codecells
    * 
    */
    IPython.toolbar.add_buttons_group([
                {
                    id : 'toggle_codecells',
                    label : 'Toggle codecell display',
		    /* ZSH 12 Dec 14 : Need to update icon name to FontAwesome 4.2.0 */
                    icon : 'fa-bars',
                    callback : toggle
                }
          ]);
    if (IPython.notebook.metadata.hide_input == true) toggle();
})();
