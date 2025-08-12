export const documentChecklist = {
  Medical: [
    { key: 'valid_id', label: 'Valid ID', required: true },
    { key: 'barangay_indigency', label: 'Barangay Indigency', required: true },
    { key: 'medical_abstract', label: 'Medical Abstract (≤3 months)', required: true },
    { key: 'soa', label: 'SOA/Certificate of Balance', required: true },
    { key: 'prescription', label: 'Prescription/Quotation', required: false },
    { key: 'provider_contact', label: 'Provider Contact', required: false }
  ],
  Burial: [
    { key: 'valid_id', label: 'Valid ID', required: true },
    { key: 'death_certificate', label: 'Death Certificate', required: true },
    { key: 'funeral_contract', label: 'Funeral Contract/Quotation', required: true },
    { key: 'cause_of_death', label: 'Cause of Death', required: false },
    { key: 'transfer_permit', label: 'Transfer Permit (if applicable)', required: false }
  ],
  Education: [
    { key: 'valid_id', label: 'Valid ID', required: true },
    { key: 'cor', label: 'Certificate of Registration/Assessment', required: true },
    { key: 'soa', label: 'Statement of Account/Fees', required: true },
    { key: 'school_id', label: 'School ID', required: false }
  ]
};
