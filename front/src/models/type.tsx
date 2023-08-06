import { type } from "@testing-library/user-event/dist/type"

export type News = {
    apiUrl: string
    fields: {
        body: string
        bodyText: string
        byline: string
        bylineHtml: string
        charCount: string
        firstPublicationDate: string
        headline: string
        isInappropriateForSponsorship: boolean
        isLive: boolean
        isPremoderated: boolean
        lang: string
        lastModified: string
        legallySensitive: boolean
        main: string
        productionOffice: string
        publication: string
        shortUrl: string
        shouldHideAdverts: boolean
        shouldHideReaderRevenue: boolean
        showAffiliateLinks: boolean
        showInRelatedContent: boolean
        standfirst: string
        thumbnail: string
        trailText: string
        wordcount: string

    }
    id: string
    isHosted: boolean
    pillarId: string
    pillarName: string
    sectionId: string
    sectionName: string
    tags: Tag[]
    type: string
    webPublicationDate: string
    webTitle: string
    webUrl: string

}

type Tag = {
    apiUrl: string
    id: string
    references: string[]
    sectionId: string
    sectionName: string
    type: string
    webTitle: string
    webUrl: string
}