import { useEffect, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import 'intersection-observer'

const Video = ({ src, description = undefined, ...props }) => {
  const [inViewRef, inView] = useInView({
    threshold: 1
  })
  const videoRef = useRef()

  const setRefs = useCallback(
    node => {
      // Ref's from useRef needs to have the node assigned to `current`
      videoRef.current = node
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node)

      if (node) {
        node.addEventListener('click', function() {
          if (this.paused) {
            this.play()
          } else {
            this.pause()
          }
        })
      }
    },
    [inViewRef]
  )

  useEffect(() => {
    if (!videoRef || !videoRef.current) {
      return
    }

    if (inView) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [inView])

  return (
    <>
      <div className="video">
        <video ref={setRefs} muted loop playsInline {...props}>
          <source src={src} type="video/mp4" />
        </video>
        <figure>{description}</figure>
      </div>
      <style jsx>{`
      .video {
        width: 1080px;
        max-width: calc(100vw - 40px);
        transform: translateX(-50%);
        margin-left: 50%;
        text-align: center;
        cursor: pointer;
      }
      .video :global(video) {
        max-width: 100%;
        max-height: 90vh;
        outline: none;
      }
      `}</style>
    </>
  )
}

export default Video
