/**
* @NApiVersion 2.1
* @NScriptType UserEventScript
* @NModuleScope SameAccount
*/
define(["N/record"], function(r)  {
    function beforeLoad(context)  {
        var currentRecord = context.newRecord;
        var projectType = currentRecord.getValue({
            fieldId: "jobtype";
            value: ('EPC', 'Build', 'SESP','Install Only')
        });
    
        currentRecord.setValue({
            fieldID: 'customform',
            value: ('TSS SESP Project Form')
            )
    
    }
    
    return {
        beforeLoad: beforeLoad,
    }
    
    })