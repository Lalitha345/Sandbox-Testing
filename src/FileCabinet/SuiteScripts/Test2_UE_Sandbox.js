/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record'],
    
    (record) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {
            try{
                //Changes made in sandbox
                if (context.type !== context.UserEventType.CREATE)
                return;
                var customerRecord = context.newRecord;
                customerRecord.setValue('memo', 'test data');
                }catch(e){
                    log.debug(e.name,e.message)
                }

        }

        return {beforeLoad}

    });
