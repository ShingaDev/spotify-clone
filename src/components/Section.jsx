import { Icon } from "Icons";
import { NavLink } from "react-router-dom";

function Section({ title, more = false, items }) {
  const imageStyle = item => {
    switch (item.type) {
      case "artist":
        return "rounded-full";

      case "podcast":
        return 'rounded-lg'

      default:
        return "rounded";
    }
  };

  return (
    <section>
      <header className="flex items-end justify-between mb-4">
        <NavLink to={more ?? '#'} >
          <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">
            {title}
          </h3>
        </NavLink>
        {more &&
          <NavLink
            className={
              "text-xs hover:underline font-bold uppercase text-link tracking-widest"
            }
            to={more}
          >
            HEPSİNİ GÖR
          </NavLink>}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map(item =>
          <NavLink
            key={item.id}
            to="/"
            className={"bg-footer p-4 rounded hover:bg-active block w-full group"}
          >
            <div className="pt-[100%] relative mb-4">
              <img
                src={item.image}
                className={`absolute inset-0 object-cover ${imageStyle(
                  item
                )}`}
              />
              <button className="w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center hidden group-hover:flex group-focus:flex">
                <Icon name="play" size={24} />
              </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1">
              {item.description}
            </p>
          </NavLink>
        )}
      </div>
    </section>
  );
}

export default Section;
