import { ProductRepository } from "../repositories/ProductRepository";
import {Request, Response} from 'express'


class ProductController {
    async create(request: Request, response: Response) {
      try {
        const data = request.body;
  
        const productRepository = new ProductRepository()
  
        const Product = await productRepository.save(data);
  
        return response.status(200).json(Product);
      } catch (err) {
        return response.status(400).json({
          err: err.message,
        });
      }
    }


    async index(request: Request, response: Response){

      const productRepository = new ProductRepository()

      const products = await productRepository.find()

      return response.json(products)
    }

    async show(request: Request, response: Response){

      const {id} = request.params

      const productRepository = new ProductRepository() 

      const product = await productRepository.findId(id)

      return response.json(product)

    }

  }

  export {ProductController}
  