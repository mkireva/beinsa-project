/**
 * Utility functions for date formatting
 */

/**
 * Formats a date string in German style
 * Handles various input formats including DD-MM-YYYY, YYYY-MM-DD, and ISO dates
 */
export function formatDateGerman(dateString: string): string {
    try {
        let date: Date

        if (dateString.includes('-') && dateString.split('-').length === 3) {
            const parts = dateString.split('-')
            if (parts[0].length === 2) {
                // DD-MM-YYYY format (like "10-01-2023")
                date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)
            } else {
                // YYYY-MM-DD format
                date = new Date(dateString)
            }
        } else {
            date = new Date(dateString)
        }

        if (isNaN(date.getTime())) {
            return dateString
        }

        return date.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    } catch {
        return dateString
    }
}

/**
 * Formats a date string in German short style (DD.MM.YYYY)
 */
export function formatDateGermanShort(dateString: string): string {
    try {
        let date: Date

        if (dateString.includes('-') && dateString.split('-').length === 3) {
            const parts = dateString.split('-')
            if (parts[0].length === 2) {
                // DD-MM-YYYY format
                date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)
            } else {
                // YYYY-MM-DD format
                date = new Date(dateString)
            }
        } else {
            date = new Date(dateString)
        }

        if (isNaN(date.getTime())) {
            return dateString
        }

        return date.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    } catch {
        return dateString
    }
}

/**
 * Creates a valid ISO date string for the datetime attribute
 */
export function formatDateISO(dateString: string): string {
    try {
        let date: Date

        if (dateString.includes('-') && dateString.split('-').length === 3) {
            const parts = dateString.split('-')
            if (parts[0].length === 2) {
                // DD-MM-YYYY format
                date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)
            } else {
                // YYYY-MM-DD format
                date = new Date(dateString)
            }
        } else {
            date = new Date(dateString)
        }

        if (isNaN(date.getTime())) {
            return dateString
        }

        return date.toISOString().split('T')[0]
    } catch {
        return dateString
    }
}