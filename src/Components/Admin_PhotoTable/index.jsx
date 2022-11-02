import { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import AuthContext from "../../Hoc/authContext";
import ShowGalleryAdmin from "./ToShowThem";
import ShowPhotoAdmin from "./showGallery";

function AdminTablePhoto({ photos, isLoadingPhotos, deleteClick, reload }) {
  const [open, setOpen] = useState(false);
  const [openBlogAdd, setOpenBlogAdd] = useState(false);
  const [openBlogEdit, setOpenBlogEdit] = useState(false);

  const [userId, setUserId] = useState(null);
  const [galleryID, setGalleryID] = useState(null);
  const [blogID, setBlogID] = useState(null);

  const [photoBlogData, setPhotoBlogData] = useState([]);
  const { authTokens } = useContext(AuthContext);

  const putClick = id => {
    setUserId(id);
    setOpen(!open);
    setOpenBlogAdd(false);
  };

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async data => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/gallery/put/${userId}/`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );

    setOpen(false);
    setOpenBlogAdd(false);
    reload();

    reset();
  };

  // ///////////////////// Photo Blog  //////////////////////////////

  const onShowBlog = id => {
    fetch(`${process.env.REACT_APP_BASE_URL}/photo-blog/all/${id}/`)
      .then(response => response.json())
      .then(data => setPhotoBlogData(data));
    setOpenBlogAdd(false);
    setGalleryID(id);
  };

  const onAddBlog = id => {
    setOpenBlogAdd(!openBlogAdd);
    setGalleryID(id);
  };

  const onSubmitAddBlog = async data => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", data.image[0]);
    formData.append("gallery", galleryID);

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/photo-blog/post/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
      },
    });

    reset();
    setOpenBlogAdd(false);
  };

  const editBlogHandler = blog => {
    setBlogID(blog);
    setOpenBlogEdit(!openBlogEdit);
    setOpenBlogAdd(false);
  };

  const onSubmitEditBlog = async data => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", data.image[0]);
    formData.append("gallery", galleryID);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/photo-blog/put/${blogID}/`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );

    reset();
    setOpenBlogAdd(false);
    setOpenBlogEdit(false);
  };

  const onDelete = async id => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/photo-blog/delete/${id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
  };

  return (
    <Fragment>
      {/* Gallery */}
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>IMG</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!isLoadingPhotos &&
            photos.map(photos => (
              <ShowGalleryAdmin
                key={photos.id}
                id={photos.id}
                title={photos.title}
                description={photos.description}
                image={photos.image}
                onDelete={deleteClick}
                onEdit={putClick}
                onShowBlog={onShowBlog}
                addBlog={onAddBlog}
              />
            ))}
        </tbody>
      </Table>

      {/* Photo Blog */}

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {photoBlogData &&
            photoBlogData.length > 0 &&
            photoBlogData.map(photo => (
              <ShowPhotoAdmin
                key={photo.id}
                id={photo.id}
                title={photo.title}
                image={photo.image}
                galleryID={photo.gallery}
                onEdit={editBlogHandler}
                onDelete={onDelete}
              />
            ))}
        </tbody>
      </Table>

      {/* Edit Gallery */}

      {open && (
        <Module>
          <div className='h2'>
            <h2>Edit Gallery</h2>
          </div>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Inputs
              type={"text"}
              placeholder={"Enter Title"}
              {...register("title", {
                required: true,
              })}
            />
            <Textarea
              placeholder={"Enter Description"}
              {...register("description", {
                required: true,
              })}
            />
            <Inputs
              type={"file"}
              accept='image/*'
              {...register("image", {
                required: true,
              })}
            />
            <Button type='submit' margin={"1em"}>
              Submit
            </Button>
          </form>
        </Module>
      )}

      {/* Add Blog */}

      {openBlogAdd && (
        <Module>
          <div className='h2'>
            <h2>Add Blog</h2>
          </div>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(onSubmitAddBlog)}
          >
            <Inputs
              type={"text"}
              placeholder={"Enter Title"}
              {...register("title", {
                required: true,
              })}
            />
            <Inputs
              type={"file"}
              accept='image/*'
              {...register("image", {
                required: true,
              })}
            />
            <Button type='submit' margin={"1em"}>
              Submit
            </Button>
          </form>
        </Module>
      )}

      {/* Edit Blog */}

      {openBlogEdit && (
        <Module>
          <div className='h2'>
            <h2>Edit Blog</h2>
          </div>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(onSubmitEditBlog)}
          >
            <Inputs
              type={"text"}
              placeholder={"Enter Title"}
              {...register("title", {
                required: true,
              })}
            />
            <Inputs
              type={"file"}
              accept='image/*'
              {...register("image", {
                required: true,
              })}
            />
            <Button type='submit' margin={"1em"}>
              Submit
            </Button>
          </form>
        </Module>
      )}
    </Fragment>
  );
}

export default AdminTablePhoto;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: #eb8686;
  tr {
    border-bottom: 1px solid black;
    &:nth-child(even) {
      background-color: blue;
    }
  }
  td,
  th {
    border: 1px solid black;
    text-align: left;
    padding: 8px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  td:last-child {
    display: flex;
    flex-direction: column;
  }

  &:last-child {
    margin-top: 2em;
  }
`;
const Module = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  .h2 {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 60%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
const Inputs = styled.input`
  margin: 1em;
  width: 15rem;
  height: 2rem;
  border: 2px solid black;
  border-radius: 10px;
  outline: none;
  background-color: #d4d3d3;
  text-align: center;
  :focus {
    border: 2px solid #00ff00;
  }
  &[type="file"] {
    width: 15rem;
    height: min-content;
  }
`;
const Textarea = styled.textarea`
  margin: 1em;
  width: 15rem;
  height: 6rem;
  border: 2px solid black;
  border-radius: 10px;
  outline: none;
  background-color: #d4d3d3;
  text-align: center;
  resize: none;
  :focus {
    border: 2px solid #00ff00;
  }
`;
