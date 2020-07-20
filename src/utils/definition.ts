/** Pronunciation object */
export interface Prs {
  /** written pronunciation in Merriam-Webster format */ 
  mw?: string,
  /** pronunciation label before pronunciation */
  l?: string,
  /** pronunciation label after pronunciation */
  l2?: string,
  /** punctuation to separate pronunciation objects */
  pun?: string,
  /** audio playback information */
  sound?: {
    /** base filename for audio playback */
    audio?: string,
    /** ignored */
    ref?: string,
    /** ignored */
    stat?: string
  }
}