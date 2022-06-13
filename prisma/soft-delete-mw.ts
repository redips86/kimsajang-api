import point_model from './point-mw';

function softDeleteMw(prisma) {
  prisma.$use(async (params, next) => {
    // Check incoming query type
    if (point_model.includes(params.model)) {
      if (params.action == 'delete') {
        // Delete queries
        // Change action to an update
        params.action = 'update';
        params.args['data'] = { deleted: true };
      }
      if (params.action == 'deleteMany') {
        // Delete many queries
        params.action = 'updateMany';
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true;
        } else {
          params.args['data'] = { deleted: true };
        }
      }
    }

    return next(params);
  });
}

export default softDeleteMw;
