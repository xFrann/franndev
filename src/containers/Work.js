import WorkStyle from '../css/WorkStyle.css'
import general from '../css/general.css'

export default function Work(){
    return(
        <div>
            
        <div class="column-1 paragraph-text">
                <h2 className='secondary-text'>Work experience</h2> 
            <table class="table-style"> 
                <tr>
                <td id='td-blue'>Oracle</td>
                <td>Support Engineer</td>
                <td>06/2021-present</td>
            </tr>
            <tr>
                <td id='td-blue'>Facebook</td>
                <td>CEO</td>
                <td>02/04/2004-present</td>
            </tr>
            <tr>
                <td id='td-blue'>Adevar.org</td>
                <td>Freelance developer</td>
                <td>naibastie/2021</td>
            </tr>
            <tr>
                <td id='td-blue'>ai inteles idea</td>
                <td>Barosan,</td>
                <td>2001-2022</td>
            </tr>
            
            </table>
            <p id='check-out' className='padding-top-bottom'>Find more about it on <a href="https://www.linkedin.com/in/frangumadalin215/" id='color-blue'>my Linkedin account</a></p>
            
        </div>
         </div>
    );
}