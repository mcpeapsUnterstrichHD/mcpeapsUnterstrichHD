
enum ContactType {
telephone = "telephone",
email = "email",
address = "address"
}

interface ContactDetails {
display: string,
link: string
}

interface AddressDetails {
street: string,
zip: string,
city: string,
country: string,
link: string
}

export const contactDetails: {
[ContactType.telephone]: ContactDetails
[ContactType.email]: ContactDetails
[ContactType.address]: AddressDetails
} = {
  [ContactType.telephone]: {
  display: "+4917645172171",
  link: "tel:+4917645172171"
  },
  [ContactType.email]: {
  display: "aps.fabian@mcpeapsunterstrichhd.dev",
  link: "mailto:aps.fabian@mcpeapsunterstrichhd.dev"
  },
  [ContactType.address]: {
  street: "Ludwig-Renn-Straße 33",
  zip: "12679",
  city: "Cv.about.address.berlin",
  country: "Cv.about.address.germany",
  link: "https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland"
  }
}
