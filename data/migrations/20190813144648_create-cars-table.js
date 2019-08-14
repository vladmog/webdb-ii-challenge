
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        // primary key, called id, integer, autoincrements
        tbl.increments();

        tbl
            .string('vin', 128)
            .unique()
            .notNullable();
        tbl
            .string('make', 128)
            .notNullable();
        tbl
            .string('model', 128)
            .notNullable();
        tbl
            .decimal('mileage');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
