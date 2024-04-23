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
          (PIN: 119-6006) for those that are unable to attend in person. A
          recording will be available at the same URL for 7 days after the
          service.
        </p>

        <h2 className="font-heading text-48 leading-100 mt-32 mb-8">
          The Wake
        </h2>
        <p className="mb-8">
          After the funeral, everyone is invited to join the family in
          remembering Ranie&apos;s life at{" "}
          <a
            className="text-blue-800 underline font-semibold"
            href="https://maps.app.goo.gl/r6zFF3WKJ6Lv5nBD7"
          >
            The Honest Lawyer Hotel
          </a>
          . Please come and celebrate Ranie's life with us.
        </p>

        <h2 className="font-heading text-48 leading-100 mt-32 mb-8">Dress</h2>
        <p>
          Ranie loved bold colours and wouldn't want to see us all dressed in
          black.
          Please dress for a celebration of her life.
          The family will be wearing smart/casual clothes with a splash of
          colour.
        </p>

        <h2 className="font-heading text-48 leading-100 mt-32 mb-8">
          Flowers &amp; Donations
        </h2>
        <p className="mb-24">
          Rather than bringing flowers, if you would like to honour Ranie’s
          memory another way, we’d welcome donations to Homestart Teeside, a charity close to Ranie’s heart.
        </p>
        <p>
          <a href="https://homestart-teesside.org.uk/" className="btn">Donate to Homestart Teeside</a>
        </p>
      </div>
    </>
  );
}

export default FuneralPage;
