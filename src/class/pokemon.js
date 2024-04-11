export class Pokemon {
	pokedex_id;
	generation;
	category;
	name;
	sprites;
	types;
	talents;
	stats;
	resistances;
	evolution;
	height;
	weight;
	egg_group;
	genderRatio;
	catchRate;
	xpToLevel100;
	form;


	constructor(pokedex_id, generation, category, name, sprite, types, talents, stats, resistances, evolution, height, weight, egg_group, genderRatio, catchRate, xpToLevel100, form) {
		this.pokedex_id = pokedex_id;
		this.generation = generation;
		this.category = category;
		this.name = name;
		this.sprites = sprite;
		this.types = types;
		this.talents = talents;
		this.stats = stats;
		this.resistances = resistances;
		this.evolution = evolution;
		this.height = height;
		this.weight = weight;
		this.egg_group = egg_group;
		this.genderRatio = genderRatio;
		this.catchRate = catchRate;
		this.xpToLevel100 = xpToLevel100;
		this.form = form;
	}
}
