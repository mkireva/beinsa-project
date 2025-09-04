// Test file to verify date formatting
import { formatDateGerman, formatDateGermanShort, formatDateISO } from './date-utils'

// Test the date formatting with the sample date from the article
const testDate = "10-01-2023" // DD-MM-YYYY format from the markdown file

console.log('Testing date formatting:')
console.log('Input:', testDate)
console.log('German long:', formatDateGerman(testDate))
console.log('German short:', formatDateGermanShort(testDate))
console.log('ISO format:', formatDateISO(testDate))

// Test with other formats
const testDate2 = "2023-01-10" // YYYY-MM-DD format
console.log('\nTesting with YYYY-MM-DD format:')
console.log('Input:', testDate2)
console.log('German long:', formatDateGerman(testDate2))
console.log('German short:', formatDateGermanShort(testDate2))
console.log('ISO format:', formatDateISO(testDate2))