export interface HomeListRespose {
    status: string
    result: Result
}

export interface Result {
    get_post: GetPost[]
    countries: Country[]
    get_freelancerspost: GetFreelancerspost[]
    get_users: GetUser[]
    get_ourservice: GetOurservice[]
    get_company: any[]
    get_career: GetCareer[]
}

export interface GetPost {
    id: string
    post_title: string
    description: string
    user_id: string
    user_image: string;
    company_name: string;
}

export interface Country {
    id: string
    name: string
    iso3: string
    numeric_code: string
    iso2: string
    phonecode: string
    capital: string
    currency: string
    currency_name: string
    currency_symbol: string
    tld: string
    native?: string
    region: string
    subregion: string
    timezones: string
    translations: string
    latitude: string
    longitude: string
    emoji: string
    emojiU: string
    created_at: string
    updated_at: string
    flag: string
    wikiDataId?: string
}

export interface GetFreelancerspost {
    id: string
    user_id: string
    post_title: string
    description: string
    required_key_skills: string
    duration: string
    charges: string
    currency: string
    category_id: string
    subcategory_id: string
    appli_deadeline: string
    country: string
    state: string
    city: string
    location: string
    latitude: string
    longitude: string
    complete_address: string
    status: string
    created_date: string
    update_date: string
    is_delete: string
}

export interface GetUser {
    userId: string
    companyname: string
    firstname: string
    lastname: string
    username: any
    email: string
    mobile: string
    dob: any
    password: string
    profilePic: string
    userType: string
    serviceType: any
    created: string
    modified: string
    status: string
    email_verified: string
    address: string
    latitude: string
    longitude: string
    zip: string
    resume: string
    additional_image: string
    short_bio: string
    video: string
    gender: string
    experience: string
    qualification: string
    skills: string
    oauth_provider: string
    oauth_uid: string
    view_count: string
    foundedyear: any
    teamsize: any
    id: string
    employer_id: string
    subscription_id: string
    name_of_card: string
    amount: string
    payment_status: string
    transaction_id: string
    payment_date: string
    created_date: string
    expiry_date: string
    invoice_url: string
    invoice_pdf: string
    duration: string
}

export interface GetOurservice {
    id: string
    category_id: string
    image: string
    icon: string
    description: string
    status: string
    created_date: string
    update_date: string
}

export interface GetCareer {
    id: string
    title: string
    image: string
    description: string
    status: string
    created_date: string
    update_date: string
}
