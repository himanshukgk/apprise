const modal = document.querySelector(".modal_read");
const overflow = document.querySelector(".overlay_show");

document.querySelector(".read_more1").addEventListener("click", (e) => {
  modal.innerHTML = `<h6>KGK Academy ties up with GITS for training and placements</h6>
    <p>
      KGK Academy joined hands with Geetanjali Institute of Technical
      Studies, Udaipur to provide gems & jewellery training and
      placement to aspiring students. Under the designed program named
      ‘Diamond Orientation’, students will be given theoretical as well
      as practical training about various aspects of jewellery making.
      KGK Group, through its newly launched educational vertical aims to
      accelerate the literacy quotient of the industry.
    </p>`;
  modal.classList.remove("none");
  overflow.classList.remove("none");
});
document.querySelector(".read_more2").addEventListener("click", (e) => {
  modal.innerHTML = `<h6>KGK organises Covid-19 vaccination drive for Employees</h6>
    <p>
    The KGK Group has stepped up the pace of the vaccination drive, in
    a bid to cover estimated 450 employees, engaged in recently
    inaugurated Sitapura, Jaipur’s Jewellery manufacturing unit. KGK
                      is also working closely with local government officials to get its
                      employees vaccinated in every business vertical present across
                      globe. Sanjay Kothari, Vice Chairman KGK Group states, “We are
                      scaling up vaccination quickly with a focus on bringing down
                      employee infected rates, infuse confidence, and commence the
                      process of eventually safely getting back to workplaces”.
                    </p>`;
  modal.classList.remove("none");
  overflow.classList.remove("none");
});
document.querySelector(".read_more3").addEventListener("click", (e) => {
  modal.innerHTML = `<h6>
    BMCHRC Donates Oxygen Concentrators andOximetersto State
    Government
  </h6>
  <p>
    Going forward with our motto of quality healthcare for everyone,
    our healthcare CSR vertical BhagwanMahaveer Cancer Hospital and
    Research Center (BMCHRC), Jaipur donated 20 oxygen concentrators
    of 10 litres and 200 oximeters to the State Health Minister, Mr.
    Raghu Sharma on 21st May 2021. Hospital had also donated 50 oxygen
    concentrators to the Rajasthan state government on 12th May 2021.
    Present on the occasion, Mr. Raghu Sharma said “It makes us happy
    to see that despite being a multi-specialty cancer hospital,
    BMCHRC has set up a special COVID ward with the capacity of 40
    beds.”
  </p>`;
  modal.classList.remove("none");
  overflow.classList.remove("none");
});
overflow.addEventListener("click", () => {
  modal.classList.add("none");
  overflow.classList.add("none");
});
