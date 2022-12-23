/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/runtime'],
/**
 * @param{runtime} runtime
 */
function(runtime) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(scriptContext) {
        try{
        var userObj = runtime.getCurrentUser();
        alert("User details: "+userObj)
        }catch(e){
			log.debug(e.name,e.message)
		}
    }

    
    return {
        pageInit: pageInit
    };
    
});
