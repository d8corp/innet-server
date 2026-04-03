// ==================== DATE ONLY ====================

// Calendar date: 2024-01-01
export type ISODateOnly = `${number}-${number}-${number}`

// Basic format (no separators): 20240101
export type ISOBasicDate = `${number}`

// Week date: 2024-W01
export type ISOWeekDate = `${number}-W${number}`

// Week date with day: 2024-W01-1
export type ISOWeekDayDate = `${number}-W${number}-${number}`

// Ordinal date: 2024-092 (day of year)
export type ISOOrdinalDate = `${number}-${number}`

// ==================== TIME ONLY ====================

// Local time with hours and minutes: 12:00
export type ISOTimeHM = `${number}:${number}`

// Local time: 12:00:00
export type ISOTimeOnly = `${ISOTimeHM}:${number}`

// UTC time: 12:00:00Z
export type ISOTimeUTC = `${ISOTimeOnly}Z`

// UTC time with hours and minutes: 12:00Z
export type ISOTimeHMUTC = `${ISOTimeHM}Z`

// Time with offset: 12:00:00+03:00
export type ISOTimeWithOffset = `${ISOTimeOnly}${'+' | '-'}${ISOTimeHM}`

// Time with offset (hours and minutes only): 12:00+03:00
export type ISOTimeHMWithOffset = `${ISOTimeHM}${'+' | '-'}${ISOTimeHM}`

// ==================== DATETIME (no timezone) ====================

// Naive datetime: 2024-01-01T12:00:00
export type ISOLocalDateTime = `${ISODateOnly}T${ISOTimeOnly}`

// With milliseconds: 2024-01-01T12:00:00.123
export type ISOLocalDateTimeMillis = `${ISODateOnly}T${ISOTimeOnly}.${number}`

// ==================== DATETIME (UTC) ====================

// UTC datetime: 2024-01-01T12:00:00Z
export type ISODateTimeUTC = `${ISODateOnly}T${ISOTimeUTC}`

// UTC with fractional seconds: 2024-01-01T12:00:00.123Z, 2024-01-01T12:00:00.123456Z
export type ISODateTimeUTCFractional = `${ISOLocalDateTimeMillis}Z`

// ==================== DATETIME (with offset) ====================

// With offset: 2024-01-01T12:00:00+03:00
export type ISODateTimeWithOffset = `${ISODateOnly}T${ISOTimeOnly}${'+' | '-'}${ISOTimeHM}`

// With offset (no colon): 2024-01-01T12:00:00+0300
export type ISODateTimeWithOffsetCompact = `${ISODateOnly}T${ISOTimeOnly}${'+' | '-'}${number}`

// With offset (hour only): 2024-01-01T12:00:00+03
export type ISODateTimeWithOffsetHourOnly = `${ISODateOnly}T${ISOTimeOnly}${'+' | '-'}${number}`

// With offset and milliseconds: 2024-01-01T12:00:00.123+03:00
export type ISODateTimeWithOffsetMillis = `${ISOLocalDateTimeMillis}${'+' | '-'}${ISOTimeHM}`

// ==================== BASIC FORMAT DATETIME ====================

// Basic datetime: 20240101T120000
export type ISOBasicDateTime = `${number}T${number}`

// Basic datetime UTC: 20240101T120000Z
export type ISOBasicDateTimeUTC = `${number}T${number}Z`

// ==================== TRUNCATED (local context) ====================

// Truncated date (month-day only): --01-01
export type ISOTruncatedDate = `--${number}-${number}`

// Truncated datetime: --01-01T12:00:00
export type ISOTruncatedDateTime = `--${number}-${number}T${ISOTimeOnly}`

// Time-only truncated: T12:00:00
export type ISOTruncatedTime = `T${ISOTimeOnly}`

// Time-only truncated (no seconds): T12:00
export type ISOTruncatedTimeHM = `T${ISOTimeHM}`

// ==================== UNION TYPES ====================

export type ISODate =
  | ISOBasicDate
  | ISODateOnly
  | ISOOrdinalDate
  | ISOTruncatedDate
  | ISOWeekDate
  | ISOWeekDayDate

export type ISOTime =
  | ISOTimeHM
  | ISOTimeHMUTC
  | ISOTimeHMWithOffset
  | ISOTimeOnly
  | ISOTimeUTC
  | ISOTimeWithOffset
  | ISOTruncatedTime
  | ISOTruncatedTimeHM

export type ISODateTime =
  | ISOBasicDateTime
  | ISOBasicDateTimeUTC
  | ISODateTimeUTC
  | ISODateTimeUTCFractional
  | ISODateTimeWithOffset
  | ISODateTimeWithOffsetCompact
  | ISODateTimeWithOffsetHourOnly
  | ISODateTimeWithOffsetMillis
  | ISOLocalDateTime
  | ISOLocalDateTimeMillis
  | ISOTruncatedDateTime

export type ISOString = ISODate | ISODateTime | ISOTime
