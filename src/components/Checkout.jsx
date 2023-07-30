import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../store/product/action";
import Character from "../assets/images/card-character.png";
import IconLeft from "../assets/icons/left.svg";
import IconRight from "../assets/icons/right.svg";
import IconBca from "../assets/icons/bca.svg";
import IconMandiri from "../assets/icons/mandiri.svg";

const Checkout = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entity } = useSelector((state) => state.product);
  const { entities } = useSelector((state) => state.cart);
  useEffect(() => {
    const fetchProduct = async () => {
      await dispatch(getProduct(id));
    };

    fetchProduct();
  }, [dispatch, id]);

  const goToInstructions = () => {
    navigate(`/instructions`);
  };

  return (
    <section className="flex mt-[30px] mb-[100px] flex-col">
      <div className="flex flex-col justify-center items-start">
        <div className="flex gap-3 px-5 py-5">
          <img src={IconLeft} alt="arrow left" />
          <p className="breadcrumb-active">Checkout</p>
          <img src={IconRight} alt="arrow rigth" />
          <p className="breadcrumb">Instruksi Bayar</p>
        </div>
        <h2 className="checkout-heading p-5 mb-8">Checkout</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="card px-8">
          <div className="flex flex-col">
            <h3 className="checkout-sub-heading my-4 mt-8">
              Pilih Metode Pembayaran
            </h3>
            <h6 className="checkout-title">
              Bank Transfer (verifikasi manual)
            </h6>
            <p className="checkout-desc my-1">
              Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar
              ini memerlukan verifikasi pembayaran manual melalui Whatsapp
            </p>
            <hr className="my-1" />
            <div className="flex flex-row mt-3 py-2 px-3 justify-between border-[1px] h-[56px]">
              <div className="flex flex-row gap-3 checkout-item items-center ">
                <img
                  src={IconMandiri}
                  alt="Bank Mandiri"
                  className="w-[72px] h-[28px]"
                />
                <p className="text-[14px] items-center">
                  Transfer Ke Rekening Bank Mandiri
                </p>
              </div>
              <div className="flex">
                <input type="radio" name="Bank" className="items-center" />
              </div>
            </div>
            <div className="flex flex-row mt-3 py-2 px-3 justify-between border-[1px] h-[56px]">
              <div className="flex flex-row gap-3 checkout-item items-center ">
                <img
                  src={IconBca}
                  alt="Bank Mandiri"
                  className="w-[72px] h-[28px]"
                />
                <p className="text-[14px] items-center">
                  Bank Transfer ke Rek Bank BCA
                </p>
              </div>
              <div className="flex">
                <input type="radio" name="Bank" className="items-center" />
              </div>
            </div>

            <h6 className="checkout-title mt-6">
              Virtual Account (verifikasi otomatis)
            </h6>
            <p className="checkout-desc my-1">
              Pembayaran melalui virtual account berbagai bank. Metode bayar ini
              akan diverifikasi secara otomatis.
            </p>
            <hr className="my-1" />
            <div className="flex flex-row mt-3 py-2 px-3 justify-between border-[1px] h-[56px]">
              <div className="flex flex-row gap-3 checkout-item items-center ">
                <img
                  src={IconMandiri}
                  alt="Bank Mandiri"
                  className="w-[72px] h-[28px]"
                />
                <p className="text-[14px] items-center">
                  Transfer Ke Rekening Bank Mandiri
                </p>
              </div>
              <div className="flex">
                <input type="radio" name="Bank" className="items-center" />
              </div>
            </div>
            <div className="flex flex-row mt-3 py-2 px-3 justify-between border-[1px] h-[56px]">
              <div className="flex flex-row gap-3 checkout-item items-center ">
                <img
                  src={IconBca}
                  alt="Bank Mandiri"
                  className="w-[72px] h-[28px]"
                />
                <p className="text-[14px] items-center">
                  Bank Transfer ke Rek Bank BCA
                </p>
              </div>
              <div className="flex">
                <input type="radio" name="Bank" className="items-center" />
              </div>
            </div>

            <div className="pt-5"></div>
          </div>
        </div>
        <div className="card px-8">
          <div className="flex flex-col">
            <h3 className="checkout-sub-heading my-4 mt-8">
              Ringkasan Pesanan
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
