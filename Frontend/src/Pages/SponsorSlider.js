// SponsorSlider.jsx
import React from "react";
import "../Styles/Home.css"; // Ensure the styles are correctly imported

function SponsorSlider() {
  const sponsors = [
    {
      name: "Birhanu Kramer",
      profileUrl: "https://www.linkedin.com/in/birhanu-kramer/",
      imgUrl:
        "https://media.licdn.com/dms/image/v2/D5603AQGXC03nwzDZ7w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712198894997?e=1730332800&v=beta&t=gDiB4RFg9AzVCQYA-VLVrtNz9I_IrqRL4DDAnNr6mfc",
    },
    {
      name: "Beni Kiambote",
      profileUrl: "https://www.linkedin.com/in/beni-kiambote/",
      imgUrl:
        "https://media.licdn.com/dms/image/v2/D4E03AQFtM4Ly6xZPww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725436889492?e=1730937600&v=beta&t=iHTaVvx8BUy6T4Z8T1MpOmwRBxlr_grGlkJ53PINvi0",
    },
    {
      name: "Jordan Sturdivant",
      profileUrl: "https://www.linkedin.com/in/jordan-sturdivant-linked1/",
      imgUrl:
        "https://media.licdn.com/dms/image/v2/D5603AQE9iJ40OomEeg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722292591683?e=1730332800&v=beta&t=-9vmHsUSX6Co7cltiQ8EoV0sXntrbgEPYzexjzvfP1k",
    },
    {
      name: "Edwin Luna",
      profileUrl: "https://www.linkedin.com/in/edwinlunadlg/",
      imgUrl:
        "https://media.licdn.com/dms/image/v2/D4E03AQEj-lVo-ihwQw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718977868309?e=1730332800&v=beta&t=NtN4aS1C6OSxqd0XPgfvVc20PrERDROXSj-TZhbTXzM",
    },
  ];

  return (
    <div className="sponsor-slider">
      <div className="slider-track">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={sponsor.imgUrl} alt={sponsor.name} />
          </a>
        ))}
        {sponsors.map((sponsor, index) => (
          <a
            key={index + sponsors.length}
            href={sponsor.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={sponsor.imgUrl} alt={sponsor.name} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SponsorSlider;
