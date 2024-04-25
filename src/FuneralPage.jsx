import Navbar from "./Navbar.jsx";

function FuneralPage() {
  return (
    <>
      <Navbar selected="funeral" />
      <div className="container text-center mb-32">
        <h1 className="font-heading text-[60px] pt-32 leading-100">
          Funeral Details
        </h1>
        <p className="text-18">
          Please join us for a celebration of Ranie’s life.
        </p>
        <h2 className="font-heading text-48 leading-100 mt-32 mb-8">
          The Service
        </h2>

        <p className="mb-12">
          The funeral service will take place at <a
            className="text-blue-800 underline font-semibold"
            href="https://maps.app.goo.gl/8frNb2WYqHBgCwt59"
          >
            Durham Crematorium
          </a>{" "}on{" "}
          <strong className="font-semibold">Tuesday 7th May 2024 at 1pm</strong>
          .
        </p>
        <p>
          The service will be{" "}
          <a
            className="text-blue-800 underline font-semibold"
            href="https://www.wesleymedia.co.uk/webcast-view"
          >
            livestreamed here
          </a>{" "}
          (PIN: 119-6006) for those unable to attend in person. A
          recording will be available at the same link for 7 days after the
          service.
        </p>

        <h2 className="font-heading text-48 leading-100 mt-32 mb-8">
          The Wake
        </h2>
        <p className="mb-8">
          After the funeral, please join our family to celebrate 
          Ranie&apos;s life at{" "}
          <a
            className="text-blue-800 underline font-semibold"
            href="https://maps.app.goo.gl/r6zFF3WKJ6Lv5nBD7"
          >
            The Honest Lawyer Hotel
          </a>.
        </p>

        <h2 className="font-heading text-48 leading-100 mt-32 mb-8">Dress</h2>
        <p>
          Ranie loved bold colours so please don&apos;t feel the need to wear black.
          Please dress for a celebration of her life.
          The family will be wearing smart/casual clothes with a splash of
          colour.
        </p>

        <h2 className="font-heading text-48 leading-100 mt-32 mb-8">
          Flowers &amp; Donations
        </h2>
        <p className="mb-24">
          Rather than bringing flowers, if you would like to honour Ranie’s
          memory another way, we’d welcome donations to Homestart Teesside, a charity close to Ranie’s heart.
        </p>
        <p>
          <a href="https://homestart-teesside.org.uk/" className="btn">Donate to Homestart Teesside</a>
        </p>
      </div>
    </>
  );
}

export default FuneralPage;
