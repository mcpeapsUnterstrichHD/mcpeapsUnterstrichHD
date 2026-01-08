
enum ContactType {
telephone = "telephone",
email = "email"
}

interface ContactDetails {
display: string,
link: string
}

export const contactDetails: {
[ContactType.telephone]: ContactDetails
[ContactType.email]: ContactDetails
} = {
  [ContactType.telephone]: {
  display: "+4917645172171",
  link: "tel:+4917645172171"
  },
  [ContactType.email]: {
  display: "aps.fabian@mcpeapsunterstrichhd.dev",
  link: "mailto:aps.fabian@mcpeapsunterstrichhd.dev"
  }
}
