import { FilterQuery, Query } from "mongoose";

class QueryBuiler<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  search(searchableFields: string[]) {
    //console.log(this?.query);
    if (this?.query?.searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: {
                $regex: this.query.searchTerm,
                $options: "i",
              },
            }) as FilterQuery<T>
        ),
      });
    }
    return this;
  }
  filter() {
    const queryObj = { ...this.query };
    const excludeFields = [
      "searchTerm",
      "sort",
      "limit",
      "page",
      "fields",
      "price",
    ];
    const price: number[] = [];
    if (queryObj?.price)
      (queryObj.price as string)
        .split("-")
        .filter((field) => price.push(parseInt(field)));

    excludeFields.forEach((field) => delete queryObj[field]);
    if (queryObj.category === "") delete queryObj["category"];
    if (queryObj.brand === "") delete queryObj["brand"];
    if (queryObj.rating === "") delete queryObj["rating"];
    if (price.length > 0)
      this.modelQuery = this.modelQuery.find({
        ...(queryObj as FilterQuery<T>),
        $and: [{ price: { $gte: price[0] } }, { price: { $lte: price[1] } }],
      });
    else this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    //console.log("final", queryObj);
    return this;
  }
  sort() {
    const sort =
      (this?.query?.sort as string)?.split(",")?.join(" ") || "-createdAt";

    this.modelQuery = this.modelQuery.sort(sort as string);
    return this;
  }
  paginate() {
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    const skip = (page - 1) * limit;
    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }
  fields() {
    const fields =
      (this?.query?.fields as string)?.split(",")?.join(" ") || "-__v";
    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
  async countTotal() {
    const filter = this.modelQuery.getFilter(); // all query and filters
    const total = await this.modelQuery.model.countDocuments(filter); // count documents based on query and filters
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    const totalPages = Math.ceil(total / page);
    return {
      total,
      page,
      limit,
      totalPages,
    };
  }
}
export default QueryBuiler;
